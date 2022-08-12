import "./levels.css";

import { useState, useEffect } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import LevelController from "../../../../../../../services/firebase/controllers/classes/level";
import Level from "../level/Level";

const Levels = () => {
  const [levels, setLevels] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getLevels = async () => {
    setLoading(true);
    const levels = await LevelController.findAll({ raw: true });
    setLevels(levels.sort((a, b) => a.weight - b.weight));
    setLoading(false);
  };

  const renderLevels = () =>
    levels.map((level, i) => (
      <Draggable key={level.id} draggableId={level.id} index={i}>
        {(provided) => <Level provided={provided} {...level} />}
      </Draggable>
    ));

  const handleDragEnd = (result) => {
    const {
      destination,
      draggableId: fromId,
      source: { index: fromIndex },
    } = result;

    if (!destination) return;
    if (isLoading) return;

    const { index: toIndex } = destination;
    const toId = levels[toIndex].id;

    //update database
    Promise.all([
      LevelController.updateOne(fromId, { weight: toIndex }),
      LevelController.updateOne(toId, { weight: fromIndex }),
    ])
      .then(() => getLevels()) //update state
      .catch((err) => {
        //log err
        console.log(err);
      });
    //update state
  };

  useEffect(() => {
    //set levels state
    getLevels();
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="levels">
        {(provided) => (
          <div
            className="viewLevels_levels"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {renderLevels()}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Levels;

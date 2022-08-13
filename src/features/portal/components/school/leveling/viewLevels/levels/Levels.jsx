import "./levels.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import LevelController from "../../../../../../../services/firebase/controllers/classes/level";
import { useGetData } from "../../../../../../../services/firebase/hooks/useGetData";

import Level from "../level/Level";

const Levels = () => {
  const sortLevels = (levels) => levels.sort((a, b) => a.weight - b.weight);

  const [levels, isLoading] = useGetData({
    controller: LevelController,
    sort: sortLevels,
  });

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
    ]);
  };

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

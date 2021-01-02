import React, { useState, useEffect } from "react";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../assets/pathfind_algo/dijkstra";
import Node from "./Node";
import "../styles/Pathfinder.css";
const startNode_row = 10;
const startNode_col = 15;
const finishNode_row = 10;
const finishNode_col = 35;

function Pathfinder() {
  const [grid, setGrid] = useState([]);
  const [mousepressed, setMousePressed] = useState(false);

  useEffect(() => {
    // grid = getInitialGrid();
    setGrid(getInitialGrid());
  }, []);

  const handleMouseDown = (row, col) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid({ grid: newGrid });
    setMousePressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (!mousepressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid({ grid: newGrid });
  };

  const handleMouseUp = () => {
    setMousePressed(false);
  };

  function an_Dijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          an_ShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  }

  const an_ShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  };

  const visualizaDijkstra = () => {
    const startNode = grid[startNode_row][startNode_col];
    const finishNode = grid[finishNode_row][finishNode_col];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    an_Dijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  //   var gridi = [];
  //   setGrid(gridi);

  return (
    <div>
      <button onClick={() => visualizaDijkstra()}>dijkstra</button>
      <div className="grid">
        {grid.map((row, rowIdx) => {
          return (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const { row, col, isFinish, isStart, isWall } = node;
                return (
                  <Node
                    key={nodeIdx}
                    col={col}
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    mouseIsPressed={mousepressed}
                    onMouseDown={(row, col) => handleMouseDown(row, col)}
                    onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                    onMouseUp={() => handleMouseUp()}
                    row={row}
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === startNode_row && col === startNode_col,
    isFinish: row === finishNode_row && col === finishNode_col,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

export default Pathfinder;

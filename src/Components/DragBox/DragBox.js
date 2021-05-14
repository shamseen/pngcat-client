import React from 'react'
import Board from './Board'
import Card from './Card'
import * as DragBoxStyle from './DragBox.module.css'

function DragBox() {
  return (
    <div className={DragBoxStyle.DragBox}>
      <h3 className={DragBoxStyle.header}>Drag and Drop</h3>
      <main className={DragBoxStyle.flexbox}>

        <Board id="board-1" className={DragBoxStyle.board}>
          <Card id="card-1" className={DragBoxStyle.card} draggable="true">
            <p>Glyph 1</p>
          </Card>
        </Board>

        <Board id="board-2" className={DragBoxStyle.board}>
          <Card id="card-2" className={DragBoxStyle.card} draggable="true">
            <p>Glyph 2</p>
          </Card>
        </Board>

      </main>
    </div>
  )
}

export default DragBox

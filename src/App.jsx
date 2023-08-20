import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>ボタン</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>TODO</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>TODO</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>TODO</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};

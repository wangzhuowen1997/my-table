import './App.css';
import {useState} from 'react'

function THead(props) {
  return (
    <div className="my-table-head">
      <table>
        <colgroup>
          {
            props.colums.map((item) => {
              return <col key={item.key}  width={200} />;
            })
          }
        </colgroup>
        <thead>
          <tr>
            {props.colums.map((item) => {
              return <th rowSpan="1" colSpan="1" key={item.key}>{item.title}</th>;
            })}
          </tr>
        </thead>
      </table>
    </div>
  );
}

function TBody(props) {
  return (
    <div className="my-table-body">
      <table>
        <colgroup>
          {props.colums.map((item) => {
            return <col key={item.key} width={200} />;
          })}
        </colgroup>
        <tbody>
          {
            props.data.map((item, index) => {
              return (
                <tr key={index}>
                  {props.colums.map((col) => {         
                    if (col.render) {
                      return <td rowSpan="1" colSpan="1" key={col.key}>
                        {col.render(item, index)}
                      </td>
                    }
                    return <td rowSpan="1" colSpan="1" key={col.key}>{item[col.key]}</td>;
                  })}
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

function Table(props) {
  return (
    <div className="my-table">
      <THead colums={props.colums} />
      <TBody data={props.data} colums={props.colums}>
        {props.children}
      </TBody>
    </div> 
  )
}

function App() {
  const [col] = useState([
    {
      title: "姓名",
      key: 'name'
    },
    {
      title: "年龄",
      key: 'age'
    },
    {
      title: '学校',
      key: 'school',
      render() {
        return <div className="color">1234</div>
      },
    },
    {
      title: '操作',
      key: 'op',
      render: (row, rowIndex) => {
        return (
          <div className="op">
            <button onClick={() => {
              deleteItem(row, rowIndex)
            }}>删除</button>
          </div>
        )
      }
    }
  ]);
  const [data, setData] = useState([
    {
      name: "Bob",
      age: 24
    },
    {
      name: "Alien",
      age: 25
    },
  ]);

  function deleteItem(row, rowIndex) {
    console.log(rowIndex, data)
    setData((prevData) => {
      return prevData.filter((item, index) => index != rowIndex)
    })
  }

  function addData() {
    setData((prevData) => {
      console.log(prevData)
      return [...prevData, {
        name: 'HAHA' + prevData.length,
        age: 25
      }]
    })
  }

  return (
    <div className="App">
      <button onClick={addData}>+数据</button>
      <Table colums={col} data={data} />
    </div>
  );
}

export default App;

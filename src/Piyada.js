import { useState } from "react"
import { Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";
import { Alert, message, Button } from 'antd';

const Piyada =()=>{
    const print = ()=>{
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                  
                  <thead>
                      <tr>
                          <th width="10%">x</th>
                          <th width="30%">Y</th>
                          <th width="30%">Z</th>
                      
                      </tr>
                  </thead>
                  <tbody>
                      {data.map((element, index)=>{
                          return  (
                          <tr key={index}>
                              <td>{element.x}</td>
                              <td>{element.y}</td>
                              <td>{element.z}</td>
                          
                          </tr>)
                      })}
                  </tbody>
              </Table>
              <Line
                data={state}
                options={{
                title:{
                    display:true,
                    },
                legend:{
                display:true,
                position:'right'
                }
                }}
                />
                {showalert &&
                <Alert type="error"></Alert>

                }

            </Container>
   
        
        )

    }
    // const [Xuse,setXuse] = useState(0)
    const [value,setValueX] = useState(0)
    const [Equation,setValueequation] = useState("x^2")
    const [Answer,setAnswer]=useState(0)
    const [html, setHtml] = useState(null);
    const data =[];
    const [xlabel,setxlabel]=useState([])
    const [B,setB] = useState([])
    const [Data,setData] = useState([])
    const [showalert,setShowaert] = useState(false)

    const state = {
        labels: value,
        datasets: [
          {
            label: 'Xl',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 2,
            data: value
          },
          {
            label: 'Xm',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'green',
            borderWidth: 2,
        
          }
        ]

   
    }   
    const inputx = (event) =>{
        console.log(event.target.value)
        setValueX(event.target.value)
        
        if (event.target.value < 1){
            message.warning('Value Failed!')
            setShowaert(true)
        }
    }

    const inputequation = (event) =>{
        console.log(event.target.value)
        setValueequation(event.target.value)
    }
    
            
  
    const CalvalueX = (xnew) => {
            var xnew,scope;
            scope = {
                x:xnew
            }
            
            xnew = evaluate(Equation, scope)

        
           
            setValueequation(xnew)
    const state = {
        labels: xlabel,
        datasets: [
          {
            label: 'Anwser',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'green',
            borderWidth: 2,
            data: B
          },
        
        ]
    }

    const Test = () =>{
        var obj={}
        console.log(B)
        setxlabel([])
        for(let i=0;i<value;i++){
            var scope1={
                x:i+1
            }
            xlabel.push(i+1)
            var b=evaluate(Equation,scope1);
            B.push(b)
            obj={
                x:i+1,
                y:null,
                z:null
            }

            data.push(obj);
        }
        setHtml(print());
    }
    
    

    return (
            <Container>
                <babel> Piyada</babel>
                <Form >
                    <Form.Group className="mb-3">
                    <Form.Label>x</Form.Label>
                        <input type="number" id="inputx" onChange={inputx}></input><br></br>
                        <Form.Label>equation</Form.Label>
                        <input type="text" id="inputequation" onChange={inputequation}></input> 
                        <input type="text" id="input equation"></input>

                   </Form.Group>
                   <Button  variant="dark" onClick={Test}  >
                       Button
                    </Button>
                    
                    
                </Form>
                <br></br>
                    <h5>Answer = {CalvalueX}</h5>
                
                <Container>
                    {/* {html}
                 */}
                </Container>
               
            </Container>
           
    )
    }

}
export default Piyada
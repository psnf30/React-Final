import {React,Component, useState} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { inv, multiply } from 'mathjs'
const Matrix = () =>  {
    const [matrix,setMatrix] = useState([])
    const [size,setSize] = useState([])
    const [ansmatrix,setAnsMatrix] = useState(0)
    const [ansmatrixX,setansmatrixX] = useState(0)

    const create =(e)=>{
        e.preventDefault()
        genarate()
    }
    const calmatrix =(e)=>{
        e.preventDefault()
        genarate()
    }

    const cal =(e)=>{
        e.preventDefault()
        let step =[]
        let arrB=[]
        let calmatrixA=[]
        for (let i = 0; i < size; i++) {
            calmatrixA[i] = []
            step[i] = []
            arrB.push(Number(document.getElementById("rowb"+i).value))
            for (let j = 0; j < size; j++) {
                
                calmatrixA[i].push(
                Number(document.getElementById("column" + i + "row" + j).value)
                )
              
            }
          }
        
        var mstrixAinv = inv(calmatrixA)
        var mstrixAsn = multiply(mstrixAinv, arrB)
        var mstrixAnsX = multiply(calmatrixA,mstrixAsn)

        // console.log(mstrixAsn)
        setAnsMatrix(mstrixAsn)
        setansmatrixX(mstrixAnsX)

        // console.log(calmatrixA)
        // console.log(arrB)

        // console.log(mstrixAsn)

  
    }


    const genarate =()=> {
        let array = [];
        let temb = []
        for (let i = 0; i < size; i++) {
          array[i] = [];
          temb.push(
            <input
            id={"rowb"+i}
            />
          ) 
          let temp = [];
          for (let j = 0; j < size; j++) {
            temp.push(<input id={"column" + i + "row" + j} />);
          }
          array[i].push(<div class="matrix a">{temp}</div>);
        }

        setMatrix({ a: array , b:temb});


    }
        return(
        <div>
            <h3>Matrix</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>
                        Input Size Of Matrix
                    </Form.Label>
                    <div>
                        <Form.Control id="inputSize" type="size" step="1" placeholder="Number" style={{width:"20%",margin:"0 auto"}} onChange={(event) => setSize(event.target.value)}></Form.Control>
                        
                    </div>
                    <br />
                    <br />
                    <Button onClick={create}>
                        Create Matrix

                    </Button>
                    <br />
                    <br />
                    
                    <div className="a">{matrix.a}</div>
                    <div className="b">{matrix.b}</div>
                  
                    <div >
                    <br />
                    <br />
                        <Button onClick={cal}>
                            Calculate
                        </Button>
                    </div>
                    <h3>ANS = {ansmatrix+" "}</h3>
                    <h3>CHECK ANS = {ansmatrixX+" "}</h3>
                 
                </Form.Group>
            </Form>
            <div id="shownumber"></div>
            <div id="showrootof"></div>

        </div>
        )
    


}
export default Matrix 
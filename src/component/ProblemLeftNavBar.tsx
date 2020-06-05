import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";


function ProblemLeftNavBar() {
    const dispatch = useDispatch()
    const problems = [
        {title: "足し算・引き算", problem_type : {"class": "math", "subclass": "add_sub"}},
        {title: "かけ算・わり算", problem_type : {"class": "math", "subclass": "mul_div"}},
        {title: "因数分解", problem_type : {"class": "math", "subclass": "factorization"}},
        {title: "行列計算", problem_type : {"class": "math", "subclass": "matrix"}},
        {title: "順列・組合せ", problem_type : {"class": "math", "subclass": "perm_combi"}},
        {title: "漢字", problem_type : {"class": "kanji", "subclass": "samples"}},
    ]

    const problem_menus = problems.map((problem : any, index) =>
        <Nav.Item key={index} onClick={() => {
            dispatch({type: "CREATE_NEW_PROBLEMS", problem_type: problem.problem_type})
            dispatch({type: "CLOSE_LEFTNAV"})
        }}>{problem.title}</Nav.Item>
    )
    const showLeftNav = useSelector((state: any) => state.showLeftnav)

    if (showLeftNav){
    return (
        <Nav id="leftnav" defaultActiveKey="/home" className="flex-column nav-pills">
            <div>
                <h3>問題選択</h3>
            </div>
            {problem_menus}
        </Nav>
    )
    }else{
        return <></>
    }
}

export {ProblemLeftNavBar}
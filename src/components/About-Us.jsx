import React, { Component } from 'react';

import Panel from './Panel';
import Employee from './Employee';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [
                {   "id": 1,
                    "name": "R. Martin Roscheisen", 
                    "role": "CEO",
                    "thumb": "https://cdn.shopify.com/s/files/1/2028/9685/files/Martin-Roscheisen-Diamond_Foundry_medium.png?v=1499887227", 
                    "description": "Personal Description"
                },
                {   "id": 2,
                    "name": "Jeremy Scholz",
                    "role": "CTO", 
                    "thumb": "https://cdn.shopify.com/s/files/1/2028/9685/files/4_medium.png?v=1499887236", 
                    "description": "Personal Description"
                },
                {   "id": 3,
                    "name": "Kyle Gazay",
                    "role": "COO",  
                    "thumb": "https://cdn.shopify.com/s/files/1/2028/9685/files/7_medium.png?v=1499887244",
                    "description": "Personal Description"
                },
                {   "id": 4,
                    "name": "Vanessa Stofenmacher", 
                    "role": "President, Vrai & Oro", 
                    "thumb": "https://cdn.shopify.com/s/files/1/2028/9685/files/Vanessa-Stofenmacher-Diamond_Foundry_medium.png?v=1499887256",
                    "description": "Personal Description"
                },
                {   "id": 5,
                    "name": "Mari Fenniche",
                    "role": "VP Marketing",  
                    "thumb": "https://cdn.shopify.com/s/files/1/2028/9685/files/Mari-Diamond_Foundry_medium.png?v=1499887268",
                    "description": "Personal Description"
                },
                {   "id": 6,
                    "name": "Michael Calonico",
                    "role": "VP Finance",  
                    "thumb": "https://cdn.shopify.com/s/files/1/2028/9685/files/mike_circle_medium.png?v=1515449694",
                    "description": "Personal Description"
                },
                {   "id": 7,
                    "name": "Rod St.Michael",
                    "role": "VP Sales",  
                    "thumb": "https://cdn.shopify.com/s/files/1/2028/9685/files/rod_circle_medium.png?v=1515449744",
                    "description": "Personal Description"
                },
                {   "id": 8,
                    "name": "Ritu Raj",
                    "role": "VP Corporate Development",  
                    "thumb": "https://cdn.shopify.com/s/files/1/2028/9685/files/ritu_circle_medium.png?v=1515449769",
                    "description": "Personal Description"
                },
        ],
        panel: [], 
        }

        this.selectEmployee = this.selectEmployee.bind(this);
    }

    componentDidMount(){
        this.setState({
            panel: [this.state.members[0],
            this.state.members[1],
            this.state.members[2]]
        })
    }

    selectEmployee(id){
        let z = document.getElementsByClassName("panels")[0]
        let cOne = z.children[0]
        let cTwo = z.children[1]
        let cThree = z.children[2]
        let panel = this.state.panel;
            let copy = panel.find(copy => (copy.id === id))
        if(copy){
            let same = 3
            if (copy === panel[0]){
                same = 0
            } else if (copy === panel[1]){
                same = 1
            } else {
                same = 2
            }
            if (same === 3){
                panel.splice( panel.indexOf(copy), 1 );
                panel.unshift(copy);
                this.setState({
                    panel: panel,
                })
                cOne.classList.add("slide")
                cTwo.classList.add("slide")
                cThree.classList.add("slide")
                setTimeout(() => {
                    cOne.classList.remove("slide")
                    cTwo.classList.remove("slide")
                    cThree.classList.remove("slide")
                }, 300)
            } else if (same === 1){
                cTwo.classList.add("back")
                cOne.classList.add("slideB")
                setTimeout(() => {
                    cOne.classList.remove("slideB")
                    cTwo.classList.remove("back")
                }, 300)
                setTimeout(() => {
                    panel.splice( panel.indexOf(copy), 1 );
                    panel.unshift(copy);
                    this.setState({
                        panel: panel,
                    })
                }, 300)
            } else if (same === 2){
                cThree.classList.add("move")
                cOne.classList.add("slideB")
                cTwo.classList.add("slideB")
                setTimeout(() => {
                    cOne.classList.remove("slideB")
                    cTwo.classList.remove("slideB")
                    cThree.classList.remove("move")
                }, 300)
                setTimeout(() => {
                    panel.splice( panel.indexOf(copy), 1 );
                    panel.unshift(copy);
                    this.setState({
                        panel: panel,
                    })
                }, 300)
            }
        } else {
            cThree.classList.add("fadeout")
        setTimeout(() => {
            cThree.classList.remove("fadeout")
        }, 300)
        setTimeout(() => {
            panel.pop();
            let addNew = this.state.members.find(empl => (empl.id === id))
            panel.unshift(addNew);
            this.setState({
                panel: panel,
            })
        cOne.classList.add("slide")
        cTwo.classList.add("slide")
        cThree.classList.add("slide")
        setTimeout(() => {
            cOne.classList.remove("slide")
            cTwo.classList.remove("slide")
            cThree.classList.remove("slide")
        }, 300
        )
        }, 300)
        }
    }


    render() {
        return (
            <div>
                <h1>Meet Our Team</h1>
                <hr />
                <Panel panel={this.state.panel} />
                <Employee members={this.state.members} 
                    selectEmployee={this.selectEmployee}/>
            </div>
        )
    }
}

export default About;
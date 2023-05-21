





let btnArray = ['btn-as', 'btn-idp', 'btn-inf', 'btn-ds', 'btn-unemp', 'btn-war' ]
let barArray = ['bar1', 'bar2', 'bar3', 'bar4', 'bar5', 'bar6' ]
let graphArray = ['chart', 'chart2', 'chart3', 'chart4', 'chart5', 'chart6' ]


function setButton(givenID, givenBar, givenGraph) {

    for (let i = 0; i < btnArray.length; i++) {
        document.getElementById(btnArray[i]).style.color = "#a1a1a1"
        document.getElementById(graphArray[i]).style.display = "none"
        document.querySelector('.'+barArray[i]).style.display = "none"
    }

        document.getElementById(givenID).style.color = "#505050"
        document.getElementById(givenGraph).style.display = "block"
        document.querySelector('.'+ givenBar).style.display = "block"

}




class VisibilityToggle extends React.Component{
    constructor(props){
        super(props)
        this.showDetails = this.showDetails.bind(this)
        this.state = {
            visibility: false
        }
    }

    showDetails(){
        console.log(this.state.visibility)
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.showDetails}>
            {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>

            {this.state.visibility && <p>These are some details</p>}

        </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visibility = true

// const showDetails = () => {
//     visibility = !visibility
//     render()
   
    
// }

// const render = ()=> {
//     const jsx= (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetails}>
//             {visibility ? 'Hide details' : 'Show details'}
//             </button>

//             {visibility && <p>These are some details</p>}

//         </div>
//     )

//     ReactDOM.render(jsx, document.getElementById('app'))
// }



// render()
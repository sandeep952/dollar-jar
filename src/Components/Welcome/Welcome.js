import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Welcome.css'
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        console.log(this.props)

    }

    componentDidMount = () => {
        this.nameRef.current.focus();
    }

    render() {
        return (
            <div className="jumbotron welcome text-center ">

                <h1>Hey there!!</h1>
                <form>
                    <input type="text"
                        placeholder="Enter your name"
                        onChange={(event) => this.props.changeUsername(event.target.value.trim())}
                        value={this.props.username}
                        ref={this.nameRef} />

                    <Link to="/dollar-jar">
                        <input type="submit" disabled={this.props.username.length>0?false:true} className="btn btn-primary" value="submit" />
                    </Link>
                </form>

            </div>)
    }

}

export default Welcome;
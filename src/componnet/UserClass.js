import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userinfo: {
                name: "dummy",
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Avnit2303")
        const json = await data.json();
        this.setState({
            userinfo: json,
        });
        console.log(json)
    }

    render() {
        const { name,avatar_url,login,location} = this.state.userinfo;
        return (
            <>
                <div className="flex justify-center">
                <div className="h-72 w-52  m-5 bg-gray-200">
                    <img src={avatar_url} className="p-3 rounded-2xl"></img>
                   
                    <h1 className="flex justify-center items-center font-bold">{name}</h1>
                    <h1 className="flex justify-center items-center ">{login}</h1>
                     <h1 className="flex justify-center items-center ">{location}</h1>
                 </div>
                </div>
            </>
        )
    }
}


export default UserClass;


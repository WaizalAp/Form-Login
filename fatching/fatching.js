import React from 'react';

class Fatching extends React.Component{
	constructor(){
		super();
		this.state={
			datas:[],
			isLoading:true
		}
	}



	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res=>res.json())
		.then(data => this.setState({
			datas:data,
			isLoading:false
				}))
		.catch(err => console.log(err))

	}

render(){
	if(this.state.isLoading){
		return <h1>Loading...</h1>
	}


	console.log(this.state.datas)
	const {datas} = this.state
	return(
		<div>
		{
			datas.map(data => {
				return (
						<p key={data.id}>{data.title}</p>
					)
				})
			}
		</div>
		)
	}
}

export default Fatching;
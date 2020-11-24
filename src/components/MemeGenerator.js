import React, { Component } from 'react'
import '../App.css';
export default class MemeGenerator extends Component {
    constructor()
    {
        super()
        this.state=
        {
            topText:'',
            bottomText:'',
            img:'https://cdn.cdnparenting.com/articles/2020/01/23181558/464300804.jpg',
            allMemeImg:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.randomImg=this.randomImg.bind(this);
    }

   componentDidMount()
   {
       fetch('https://api.imgflip.com/get_memes')
       .then(res=>{return res.json()})
       .then(res=>{
           const {memes}=res.data;
           this.setState({allMemeImg:memes})
       })
   }

   handleChange(event)
   {
    const {name,value}=event.target;
    this.setState(
        {
            [name]:value
        })
   }
   randomImg(event)
   {
    event.preventDefault();
    const randomNum=Math.floor(Math.random()*this.state.allMemeImg.length);
    const randomImg=this.state.allMemeImg[randomNum].url;
    this.setState(
        {
            img:randomImg,
            topText:this.state.allMemeImg[randomNum].name,
            bottomText:"😁😁😁"
        });
   }
   generate(event)
   {
       console.log("Manual")
   }
    render() {
        return (
            <div className="container">
                <form className="meme-form text-center" onSubmit={this.randomImg}>
                    <label>Top Text</label><br />
                   <input 
                   className="form-control"
                   type="text"
                   name="topText"
                   value={this.state.topText}
                   placeholder="Enter Top Text"
                   onChange={this.handleChange}
                   />
                   <br />
                   <label>Bottom Text</label><br />
                   <input 
                    className="form-control"
                   type="text"
                   name="bottomText"
                   value={this.state.bottomText}
                   placeholder="Enter Bottom Text"
                   onChange={this.handleChange}
                   />
                   <br />
                   <button type="button" className="btn btn-primary" onClick={this.generate}>Change Text</button>
                   <br />
                    <button className="btn btn-success" type="submit">Auto Generate</button>
                </form>
            
                <div className="container meme">
                    <img src={this.state.img} alt="meme-img" width="50%" height="320px"></img>
                    <br />
                    <h2 className="topText">{this.state.topText}</h2>
                    <br />
                    <h2 className="bottomText">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

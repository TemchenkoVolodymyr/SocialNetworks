import React, {Component} from 'react';
import {getProfile} from "../../../../api/apiData";
import {updateProfileStatusThinkCreator} from "../../../../redux/profilePageReducer";

class ProfileStatus extends Component {
  state = {
    editMode:false,
    status: this.props.status.data,
  }


componentDidMount() {
    // if(this.props.profileId === undefined){
    //   this.props.profileId = 2
    // }
  getProfile.getStatusProfile(2)
    .then(response => {
      this.setState({
        status:response.data
      })
    })
}

  editInputMode = (e) => {
    this.setState(() => ({
      editMode:true,
      status:e.target.value
    }))
  }

  finishEditMode = () => {
    this.setState(() => ({
      editMode:false
    }))
    this.props.updateStatus(this.state.status)
  }

  onChangeStatus = (e) => {
    this.setState({
      status:e.currentTarget.value
    })
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps.status)
    console.log(this.props.status)
    // if(prevProps.status !== this.props.status)
    // this.setState({
    //   status:this.props.status
    // })
  }

  render() {
    // autoFocus при активации интупа делает фокус на него и можем сразу печатать текст
    return (
      <div>
        {this.state.editMode ?
          <input autoFocus={true} onBlur={() => this.finishEditMode()} type="text" value={this.state.status} onChange={(e) => this.onChangeStatus(e)}/>
          :
          <span onDoubleClick={(e) => this.editInputMode(e)}>{this.state.status || "----"}</span>}
      </div>
    )
  }
}
export default ProfileStatus;
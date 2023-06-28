import React, { useEffect, useState} from 'react';
import {getProfile} from "../../../../api/apiData";


const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status.data)

  useEffect(() => {
    getProfile.getStatusProfile(2)
      .then(response => {
        setStatus(response.data)
      })
  }, [])


  const editInputMode = (e) => {
    setEditMode(true)
    setStatus(e.target.value)

  }

  const finishEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onChangeStatus = (e) => {

    setStatus(e.currentTarget.value)

  }

  return (
    <>
      <div>
        {editMode ?
          <input autoFocus={true} onBlur={finishEditMode} type="text" value={status} onChange={onChangeStatus}/>
          :
          <span onDoubleClick={editInputMode}>{status || "----"}</span>}
      </div>
    </>
  )

}
export default ProfileStatus
// class ProfileStatus extends Component {
//   state = {
//     editMode:false,
//     status: this.props.status.data,
//   }
//
//
// componentDidMount() {
//
//   getProfile.getStatusProfile(2)
//     .then(response => {
//       this.setState({
//         status:response.data
//       })
//     })
// }
//
//   editInputMode = (e) => {
//     this.setState(() => ({
//       editMode:true,
//       status:e.target.value
//     }))
//   }
//
//   finishEditMode = () => {
//     this.setState(() => ({
//       editMode:false
//     }))
//     this.props.updateStatus(this.state.status)
//   }
//
//   onChangeStatus = (e) => {
//     this.setState({
//       status:e.currentTarget.value
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         {this.state.editMode ?
//           <input autoFocus={true} onBlur={() => this.finishEditMode()} type="text" value={this.state.status} onChange={(e) => this.onChangeStatus(e)}/>
//           :
//           <span onDoubleClick={(e) => this.editInputMode(e)}>{this.state.status || "----"}</span>}
//       </div>
//     )
//   }
// }
// export default ProfileStatus;
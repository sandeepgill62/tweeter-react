function Profile (props) {

  const { firstName, lastName, avatar } = props;

  return (
    <aside>
      <div className="profile">
        <img className="profile__image" alt="" src={avatar} />
      </div>
      <br />
      <div className="profile__name">
        <h2><span className="profile--bold">{firstName}</span> {lastName}</h2>
      </div>
    </aside>
  )
}

export default Profile;
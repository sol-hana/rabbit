function SendIcon() {
  return (
    <img src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-05-512.png" />
  );
}

function HomeIcon() {
  return (
    <img src="https://www.nicepng.com/png/detail/937-9379647_png-file-svg-instagram-home-icon-vector.png" />
  );
}

function PlusIcon() {
  return (
    <img src="https://pixlok.com/wp-content/uploads/2021/12/Instagram-Add-Icon-09i3c.png" />
  );
}

function ExploreIcon() {
  return (
    <img src="https://cdn-icons-png.flaticon.com/512/77/77521.png" />
  );
}

function LikeIcon() {
  return (
    <img src="https://pixlok.com/wp-content/uploads/2021/12/Instagram-Like-Icon-83nfc3.png" />
  );
}

function ProfileIcon() {
  return (
    <img src="https://i.pinimg.com/236x/7e/94/96/7e9496625377d3fc8821de9b0057c087.jpg" />
  );
}

export function Icons() {
  return (
    <div className="IconsBox">
      <HomeIcon />
      <SendIcon />
      <PlusIcon />
      <ExploreIcon />
      <LikeIcon />
      <ProfileIcon />
    </div>
  );
}

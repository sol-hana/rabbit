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

export function Icons() {
  return (
    <div>
      <HomeIcon />
      <SendIcon />
    </div>
  );
}

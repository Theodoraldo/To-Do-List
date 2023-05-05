function checkState(i) {
  let actualState = '';
  if (i === true) {
    actualState = 'is_checked';
  } else {
    actualState = 'not_checked';
  }
  return actualState;
}

export default checkState;

import React from 'react'
import styles from './AddCommentButton.module.css'


const AddCommentButton = ({children, ...props}) => {
  return (
	<button {...props} className={styles.myBtn}>
	{children}
  </button>
  )
}

export default AddCommentButton

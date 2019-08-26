import React from 'react'


export const PrimaryButton = (props) => {

  const btnStyle = {
    maxWidth: props.maxWidth || '300px',
    color: props.color || '#ffffff',
    backgroundColor: props.bgColor || '#6A9790',
    border: props.border || '2px solid #6A9790',
    letterSpacing: props.ltrSpacing || '1px',
    fontWeight: props.fontWeight || 700,
    borderRadius: props.borderRadius || '5px',
    fontSize: props.fontSize || '1.2em',
    padding: props.padding || '10px 15px',
    margin: props.margin || '20px'
  }

  return (
    <button style={btnStyle}>{props.text}</button>
  )
}


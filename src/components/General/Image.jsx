import React from 'react'
import config from "../../bssl/config.json"

export const Image = ({imgSrc, classname}) => {
  return (
    <img  src={config["mode"] === "dev" ?  (config["dev-domain"] + imgSrc) : (config["prod-domain"] + imgSrc)} alt={classname} className={classname}  />
  )
}

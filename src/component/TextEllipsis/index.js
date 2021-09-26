import { useEffect, useRef, useState } from 'react';
import { Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  textEllipsis: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: props => props.width
  }
})
export default function TextEllipsis(props) {
  const { className, text, tooltip } = props;
  const classes = useStyles(props);
  const textRef = useRef();
  const [isOverFlowed, setIsOverFlowed] = useState(false);

  useEffect(() => {
    const isOverFlowed = textRef.current.scrollWidth > textRef.current.clientWidth;
    setIsOverFlowed(isOverFlowed);
  }, [])

  return (
    <Tooltip
      placement="top"
      arrow
      disableHoverListener={!isOverFlowed} 
      title={<p style={{margin: 0, fontSize: "14px"}}>{tooltip}</p>}
    >
      <div 
        ref={textRef} 
        className={clsx(classes.textEllipsis, className)}
      >
        {text}
      </div>
    </Tooltip>
  )
}

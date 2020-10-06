import React from "react";

function Nose(props) {

const Nose0 =
    <svg className={props.mode} viewBox="0 0 460 460">
<path onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} d="M212,184c-16.333,16.667-34,30-33.333,36.667s7.333,14,11.333,17
	s16.667,5.666,27,4.333s25.334-6,20.667-15s-3.333-22-2-29.667s3.421-17,2.877-22.667s-3.877-9.667-10.21-8S212,184,212,184z"/>
</svg>

const Nose1 =
    <svg className={props.mode} viewBox="0 0 460 460">
<path onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} d="M351.667,234.667c0,0-4.334-12.334-10.667-6.667
	s-12.333,7.333-12,19s-9.667,25.333-9.667,30.333s7.667,7.668,16.167,13.334s13.5,7.332,22.5,5.666s11.666-3.667,14.333-12
	s-1-18.207-4.333-22.604S351.667,234.667,351.667,234.667z"/>
</svg>

const Nose2 =
    <svg className={props.mode} viewBox="0 0 460 460">
        <path onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} d="M136.333,158.333c1.167,4.167-1.167,6.333,0,12.667
	s-1.833,7-1.167,12.167S133.906,189.5,135.87,194s5.964,7.667,9.297,7.167s7-2.667,12.167-3.667s8.167-0.666,10.833-3.833
	s9.5-0.667,5.167-7.667s-6.833-10.333-11.833-14.5s-5.833-7.167-9-13.167s-2.833-9.5-6.167-12s-5-3.5-7-1.167
	S136.333,158.333,136.333,158.333z"/>
    </svg>

const Nose3 =
    <svg className={props.mode} viewBox="0 0 460 460">
        <path onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} d="M161.5,177c-3.5,4.75-10.75,9.25-15.25,17s-12,8-10.75,18.5
	s-1.25,15,6.5,17.5s12.25,3.5,20.75,1.75S177.5,231,181,225s3.5-6.5,0-17s-6.25-13.5-4.25-22.5s6.5-14.75,2.75-18.5
	s-8.5-6.25-10.75-6s-4.5,2.5-4.75,8.5S161.5,177,161.5,177z"/>
    </svg>

const Nose4 =
    <svg className={props.mode} viewBox="0 0 460 460">
        <path onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} d="M186.666,244.667c0,4.333-3.333,7.667-3.333,17.667
	s-6.667,13.999-6.667,21.666s0.667,9,5,17s9.667,13.001,18,10.334s11-6,19.333-8s17-0.333,11-13c-6-12.667-11.334-14.666-17-25
	s-7-17-6.333-22.667s-1.333-12.334-6.333-12.667s-8,1-10.667,4S186.666,244.667,186.666,244.667z"/>
    </svg>

let ArrayOfNoses = [Nose0,Nose1,Nose2,Nose3,Nose4]

    return (ArrayOfNoses[props.number])
}

export default Nose;
import React from "react";

function Eyes(props) {

    const Eyes0 =
        <div className={'eyeContainer'}>
            <svg className={props.crazy + " pair0eyeOnTheLeft"} width="22.75px" height="13.59px"
                 viewBox="-1.887 -2.003 23 14">
                <path d="M0,7c0,0,3.75-9.25,17.75-6.25c0,0-4,5.5-5.25,6.25S5,10.5,0,7z"/>
            </svg>
            <svg className={props.crazy + " pair0eyeOnTheRight"} width="38.05px" height="17.23px"
                 viewBox="-1.299 -2.001 38 17">
                <path d="M-0.001,7.793c10.169-5.932,23.729-14.407,33.051,0
	c0,0-8.386,4.293-16.525,4.293C12.664,12.086-0.001,7.793-0.001,7.793z"/>
            </svg>
        </div>

    const Eyes1 =
        <div className={'eyeContainer'}>
            <svg className={props.crazy + " pair1eyeOnTheLeft"} width="36px" height="17.056px" viewBox="-1.951 -2.001 36 17">
                <path d="M0.549,3.936c0,0,22-11.667,31,7.999c0,0-7.254-1.334-9.333,0
	C18.792,14.134,1.549,10.269,0.549,3.936z"/>
            </svg>
            <svg className={props.crazy + " pair1eyeOnTheRight"} width="27.893px" height="17.734px" viewBox="-1.969 -1.998 28 18">
                <path d="M1.393,5.336c0,0,15.667-12.667,22,3c0,0-0.666,3.668-3.333,4.668
	S8.393,11.623,3.393,8.48C-1.607,5.336,1.393,5.336,1.393,5.336z"/>
            </svg>
        </div>

    const Eyes2 =
        <div className={'eyeContainer'}>
            <svg className={props.crazy + " pair2eyeOnTheLeft"} width="25.339px" height="14.816px" viewBox="-1.805 -2.001 25 15">
                <path d="M21.035,6.903c0,0-11.018-14.406-20.339,0
	c0,0,5.952,3.736,10.169,3.391C14.642,9.983,21.035,6.903,21.035,6.903z"/>
            </svg>
            <svg className={props.crazy + " pair2eyeOnTheRight"} width="26.187px" height="13.745px" viewBox="-1.967 -2.003 26 14">
                <path d="M0.572,9.245c0,0,1.695-13.139,21.187-7.207
	c0,0-7.924,4.991-10.593,5.932C8.496,8.911,0.572,9.245,0.572,9.245z"/>
            </svg>
        </div>


    const Eyes3 =
        <div className={'eyeContainer'}>
            <svg className={props.crazy + " pair3eyeOnTheRight"} width="26.555px" height="15" viewBox="0.029 0 27 15">
                <path d="M3.391,12.5c0,0-2-3.334,0-10c0,0,3.98,0.08,8.417,1.042
	c4.949,1.073,10.492,3.079,12.25,3.958c0,0-10.57,1.811-12.868,3.114C8.891,11.916,3.391,12.5,3.391,12.5z"/>
            </svg>
        </div>


    const Eyes4 =
        <div className={'eyeContainer'}>
            <svg className={props.crazy + " pair4eyeOnTheLeft"} width="32.5px" height="15.733px" viewBox="-1.462 -1.999 33 16">
                <path d="M1.038,2.292c0,0,14.333-7.166,27.5,7.167
	c0,0-7.909,3.205-17.834,1C6.204,9.458,1.871,2.792,1.038,2.292z"/>
            </svg>
            <svg className={props.crazy + " pair4eyeOnTheRight"} width="36.333px" height="16.139px" viewBox="-1.849 -2 36 16">
                <path d="M0.65,8.518c0,0,4.999-15.833,31.333-3c0,0-6.078,4.536-13.5,5.833
	C12.641,12.372,5.366,10.468,3.65,9.018L0.65,8.518z"/>
            </svg>
        </div>


    let ArrayOfEyes = [Eyes0, Eyes1, Eyes2, Eyes3, Eyes4]

    return (ArrayOfEyes[props.number])
}

export default Eyes;
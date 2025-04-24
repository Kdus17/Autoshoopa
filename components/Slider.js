import {Slider} from 'antd';
export default function Sliders({setMinimum, setMaximum}) {
    const marks = {
        0:'0',
        25000:'2500',
        50000:'5000',
        75000:'7500',
        100000:'10000',
    };
    return (
        <Slider range defaultValue={[0,10000]} max={100000} marks={marks} onChangeComplete={(value) => {
            setMinimum(value[0]);
            setMaximum(value[1]);
        }} />
    )
}
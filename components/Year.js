import {Slider} from 'antd';

export default function Slide({setYear,setYear2}) {
    console.log(setYear);
    const marks = {

        2000:'2000',
        2005:'2005',
        2010:'2010',
        2015:'2015',
        2020:'2020',
        2025:'2025',
    };

    return (
        <Slider range defaultValue={[2000,2025]} min={2000} max={2025} marks={marks} onChangeComplete={(value) => {
            setYear(value[0]);
            setYear2(value[1]);
        }} />
    )
}
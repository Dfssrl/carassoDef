import Header from "@/components/header/header";
import WorkComponent from "@/components/work-component/workComponent";
import WrapperBox from "@/components/WrapperBox/wrapperBox";
import { Box } from "@mui/material";

interface WrapperBoxProps {
    toggle: 'light' | 'dark';
    setToggle: (toggle: 'light' | 'dark') => void;
    startLogin: number;
    operator: string;
    className: string;
}

export default function WrapperBoxSession({
    toggle,
    setToggle,
    startLogin,
    operator,
    className,
}: WrapperBoxProps) {
    return (
        <>
            <Header
                stateToggle={toggle}
                setStateToggle={setToggle}
                startLogin={startLogin}
                operator={operator}
            />

            <Box
                component="div"
                className={className}
                sx={{
                    height: "auto",
                    width: "100%",
                    border: "1px dotted aqua",
                    overflow: 'hidden',
                    p: 0,
                    m: 0,
                    backgroundColor: toggle === 'light' ? 'rgb(230, 230, 230)' : 'rgb(57, 57, 57)',
                    color: toggle === 'light' ? 'black' : 'white',
                }}
            >
                <WrapperBox>
                    <WorkComponent />
                </WrapperBox>
            </Box>
        </>
    )
}
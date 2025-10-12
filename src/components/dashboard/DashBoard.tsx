import Header from "@/components/header/header"
import BodyCard from "@/components/main/bodyCard"


interface DashBoardProps {
    toggle: 'light' | 'dark';
    setToggle: (toggle: 'light' | 'dark' ) => void;
}

const DashBoardComponent = ({
    toggle, setToggle
}: DashBoardProps) => {
    return (
        <>
            <Header stateToggle={toggle} setStateToggle={setToggle} startLogin={new Date().getTime()} />
            <BodyCard data={[]} toggleColor={toggle} />
        </>
    )
};

export default DashBoardComponent;
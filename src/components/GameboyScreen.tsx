import { MainMenu } from "./MainMenu";

export const GameboyScreen = () => {


    return (
        <div className={"gameboy-screen"}>
            <div className="gameboy-screen__content">
                <MainMenu />
            </div>
        </div> 
    );
}


export default function Tabs({children, buttons, ButtonContainer="menu"}){

    /*let content = "No Buttons";

    if(buttons){
        content = <><ButtonContainer>{buttons}</ButtonContainer>{children}</>;
    }*/

    //const ButtonContainer = buttonContainer;

    return<>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>;
}
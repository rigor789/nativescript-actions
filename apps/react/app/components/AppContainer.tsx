import { hot } from 'react-hot-loader/root';
import * as React from "react";
import { $Page, $Label, $ActionBar, $GridLayout, $FormattedString, $Span, $Switch, $Frame } from "react-nativescript";
import { Frame, Page } from "@nativescript/core";
import { ItemSpec } from '@nativescript/core/ui/layouts/grid-layout/grid-layout';

interface Props {
    forwardedRef: React.RefObject<Frame>,
}

interface State {

}

class AppContainer extends React.Component<Props, State> {
    private readonly pageRef: React.RefObject<Page> = React.createRef<Page>();

    componentDidMount(){
        const frame: Frame = this.props.forwardedRef.current!;
        frame.navigate({
            create: () => {
                const page: Page = this.pageRef.current!;
                page.addCssFile("./components/AppContainer.scss"); // Path is relative to the 'app' folder; not relative to this file!
                return page;
            }
        });
    }

    render(){
        const { forwardedRef } = this.props;

        return (
            <$Frame ref={forwardedRef}>
                <$Page ref={this.pageRef} actionBarHidden={false}>
                    <$ActionBar>
                        <$Label>Home</$Label>
                    </$ActionBar>
            
                    <$GridLayout rows={[new ItemSpec(1, "star")]} columns={[new ItemSpec(1, "star")]}>
                        <$Label row={0} col={0} className="info">
                            <$FormattedString>
                                <$Span className="fas" text="&#xf135;"/>
                                <$Span text=" MESSAGE"/>
                            </$FormattedString>
                        </$Label>
                    </$GridLayout>
                </$Page>
            </$Frame>
        );
    }
}

// export default AppContainer;
export default hot(AppContainer); // Replace this line with the above line if you want to remove hot loading.
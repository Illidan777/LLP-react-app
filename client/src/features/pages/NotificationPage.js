import {useNavigate} from "react-router";
import DashboardPageLayout from "../../components/layout/page";
import {FONT_SIZES, FONT_WEIGHTS, StyledText} from "../../components/text";
import {FlexCenter, FlexCol} from "../../components/layout/wrapper/position/style";
import {BaseButtonBar, PrimaryButton, SecondaryButton} from "../../components/button/style";
import {paths} from "../../app/routes";
import React from "react";

export default function NotificationPage() {

    const navigate = useNavigate();

    return (
        <DashboardPageLayout
            header={
                <StyledText as="h2" size={FONT_SIZES.TITLE_MEDIUM} weight={FONT_WEIGHTS.SUPER_BOLD}>
                    Notifications
                </StyledText>
            }
            content={
                <FlexCol gap="30px">
                    <StyledText as="p" size={FONT_SIZES.SIMPLE_MEDIUM} weight={FONT_WEIGHTS.REGULAR}>
                        Your notifications is empty, because functionality has no been implemented yet :(
                        But it is gonna appear here as soon as possible, keep in touch)
                    </StyledText>

                    <FlexCenter>
                        <BaseButtonBar>
                            <PrimaryButton onClick={() => navigate(paths.library.index.getHref())}>Go to the Library</PrimaryButton>
                            <SecondaryButton onClick={() => navigate(paths.index.getHref())}>Go to the Home page</SecondaryButton>
                        </BaseButtonBar>
                    </FlexCenter>
                </FlexCol>
            }
        />
    );
};
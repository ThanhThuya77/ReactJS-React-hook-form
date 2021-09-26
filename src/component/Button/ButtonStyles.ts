// This is a temporary solution to support coloring options
// on Material UI buttons until v5 comes out sometime in Oct 2020
// https://github.com/mui-org/material-ui/milestone/35
// https://github.com/mui-org/material-ui/issues/13875
// https://github.com/mui-org/material-ui/issues/18966

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";

export enum IButtonColor {
    Default,
    Primary,
    Danger,
    Secondary,
    Success,
}

const GetBackgroundColor = (theme: Theme, color: IButtonColor) => {
    switch (color) {
        case IButtonColor.Primary:
            return theme.palette.primary.main;
        case IButtonColor.Secondary:
            return theme.palette.secondary.main;
        case IButtonColor.Danger:
            return theme.palette.error.main;
        case IButtonColor.Success:
            return theme.palette.success.main;
        default:
            return theme.custom.colors.default;
    }
};

const GetFontColor = (theme: Theme, color: IButtonColor) => {
    if (color === IButtonColor.Default) return theme.palette.text.primary;
    else return theme.custom.colors.default;
};

export const MakeButtonStyles = (buttonColor: IButtonColor) => {
    const styles = makeStyles((theme: Theme) => {
        const bgColor = GetBackgroundColor(theme, buttonColor);
        return createStyles({
            btnColor: {
                backgroundColor: bgColor,
                "&:hover": {
                    backgroundColor: darken(bgColor, 0.1),
                    borderColor: darken(bgColor, 0.2),
                    "&.Mui-disabled": {
                        backgroundColor: bgColor,
                    },
                    color: GetFontColor(theme, buttonColor),
                },
                "&:focus": {
                    backgroundColor: darken(bgColor, 0.1),
                    borderColor: darken(bgColor, 0.2),
                    "&.Mui-disabled": {
                        backgroundColor: bgColor,
                    },
                    color: GetFontColor(theme, buttonColor),
                },
                "&.Mui-disabled": {
                    backgroundColor: bgColor,
                    color: GetFontColor(theme, buttonColor),
                },

                color: GetFontColor(theme, buttonColor),
            },
        });
    });

    return styles();
};

import { cloneElement, ElementType, ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

interface SideProps {
    component?: ElementType
    lg?: number
    md?: number
    xl?: number
    xs?: number
    [key: string]: unknown
}

interface ShowSplitterProps {
    leftSide: ReactElement
    leftSideProps?: SideProps
    rightSide: ReactElement
    rightSideProps?: SideProps
}

const defaultLeftSideProps: SideProps = {
    lg: 4,
    md: 6,
    xl: 4,
    xs: 12,
    component: Card,
}

const defaultRightSideProps: SideProps = {
    lg: 8,
    md: 6,
    xl: 8,
    xs: 12,
    component: Card,
}

const ShowSplitter = ({
    leftSide,
    leftSideProps = defaultLeftSideProps,
    rightSide,
    rightSideProps = defaultRightSideProps,
    ...props
}: ShowSplitterProps) => {
    const { component: LeftContainer = Card, ...restLeftProps } = leftSideProps
    const { component: RightContainer = Card, ...restRightProps } = rightSideProps

    return (
        <Grid container spacing={4}>
            <Grid item {...restLeftProps}>
                <LeftContainer>{cloneElement(leftSide, props)}</LeftContainer>
            </Grid>
            <Grid item {...restRightProps}>
                <RightContainer>{cloneElement(rightSide, props)}</RightContainer>
            </Grid>
        </Grid>
    )
}

export { ShowSplitter }

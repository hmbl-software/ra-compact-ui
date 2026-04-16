import { alpha, SxProps, Theme } from '@mui/material'
import { ReactElement } from 'react'
import { ChipField, useRecordContext } from 'react-admin'

type PaletteColor = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'

const PALETTE_COLORS = new Set<string>([
    'default',
    'primary',
    'secondary',
    'error',
    'info',
    'success',
    'warning',
])

interface ChipOption {
    color?: PaletteColor | (string & {})
    icon?: ReactElement
}

interface CompactChipFieldProps {
    source: string
    options: Record<string, ChipOption>
    variant?: 'filled' | 'outlined' | 'light'
    size?: 'small' | 'medium'
    empty?: ReactElement | null
    sx?: SxProps<Theme>
}

export const CompactChipField = ({
    source,
    options,
    variant = 'light',
    size = 'small',
    empty = null,
    sx,
}: CompactChipFieldProps) => {
    const record = useRecordContext()
    if (!record) return null

    const value = record[source] as string
    if (!value) return empty

    const optionValue = options[value]
    const color = optionValue?.color
    const isPalette = color && PALETTE_COLORS.has(color)

    const chipVariant = variant === 'light' ? 'filled' : variant

    const buildSx = (theme: Theme) => {
        if (!color) return {}

        if (isPalette && variant === 'light') {
            const paletteColor = theme.palette[color as Exclude<PaletteColor, 'default'>]
            if (paletteColor) {
                return {
                    backgroundColor: alpha(paletteColor.main, 0.12),
                    color: paletteColor.main,
                }
            }
        }

        if (!isPalette) {
            if (variant === 'light') {
                return {
                    backgroundColor: alpha(color, 0.12),
                    color,
                }
            }
            return {
                backgroundColor: variant === 'filled' ? color : 'transparent',
                color: variant === 'filled' ? '#fff' : color,
                borderColor: variant === 'outlined' ? color : undefined,
            }
        }

        return {}
    }

    return (
        <ChipField
            source={source}
            size={size}
            variant={chipVariant}
            color={isPalette && variant !== 'light' ? (color as PaletteColor) : undefined}
            icon={optionValue?.icon}
            sx={((theme: Theme) => ({ ...buildSx(theme), ...(sx as object) })) as any}
        />
    )
}

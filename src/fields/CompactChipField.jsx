import React from 'react'
import { ChipField, RaRecord, useRecordContext } from 'react-admin'
import { get } from 'lodash'
import { alpha } from '@mui/material/styles'

const muiButtonBackground = (theme, color, fade = 0.12) =>
    alpha(theme?.palette[color]?.main ?? color, fade)
/**
 * @param {string} source - Name of the property to display.
 * @param {RaRecord} record - The current record to use. Defaults to the RecordContext value.
 * @param {Record<string, any>} options - An object containing options for displaying the desired properties
 * @param {string} variant - The variant of the chip, either "solid" or "outlined".
 * @param {string} size - The size of the chip, either
 * @param {ReactElement} empty - A fallback component to render if the value is not found or null value.
 * @returns {ReactElement} A ChipField component rendered with specified props.
 */
const CompactChipField = ({
    source,
    record,
    options,
    variant = 'solid',
    size = 'small',
    empty = null,
    ...rest
}) => {
    const defaultRecord = useRecordContext()

    const currentRecord = record || defaultRecord

    const value = get(currentRecord, source)
    if (!value) return empty

    const optionValue = options[value]
    const chipColor = optionValue?.color + '.main'
    const localSx =
        variant === 'solid'
            ? (t) => ({
                  color: chipColor,
                  backgroundColor: muiButtonBackground(t, optionValue?.color),
              })
            : {}
    const mergedSx = [rest.sx, localSx]

    return (
        <ChipField
            {...rest}
            sx={mergedSx}
            size={size}
            color={optionValue?.color}
            variant={variant}
            source={source}
            record={currentRecord}
            {...optionValue}
        />
    )
}

export default CompactChipField

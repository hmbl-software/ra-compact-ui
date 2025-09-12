import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Labeled } from 'react-admin'

const sanitizeRestProps = ({ layoutComponentName, ...rest }) => rest

const RaField = ({ field, resource, ...props }) => (
    <div
        key={field.props.source}
        className={classnames(`ra-field ra-field-${field.props.source}`, field.props.className)}
        {...sanitizeRestProps(props)}
    >
        {field.props.label !== false ? (
            <Labeled
                resource={resource}
                label={field.props.label}
                source={field.props.source}
                disabled={false}
            >
                {field}
            </Labeled>
        ) : typeof field.type === 'string' ? (
            field
        ) : (
            React.cloneElement(field, {
                resource,
            })
        )}
    </div>
)

RaField.propTypes = {
    record: PropTypes.object,
    resource: PropTypes.string,
    field: PropTypes.object,
}

export default RaField

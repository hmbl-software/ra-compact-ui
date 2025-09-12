import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FormWithRedirect } from 'ra-core'
import { CardContentInner, FormInput, Toolbar } from 'react-admin'
import { cloneRecursively, getComponentsNames, isLayoutComponent } from '../core'

/**
 * @deprecated - version 4.x of react-admin allows flexible layout forms out of the box
 */
const CompactForm = (props) => (
    <FormWithRedirect {...props} render={(formProps) => <CompactFormView {...formProps} />} />
)

CompactForm.propTypes = {
    children: PropTypes.node,
    initialValues: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    mutationMode: PropTypes.oneOf(['pessimistic', 'optimistic', 'undoable']),
    record: PropTypes.object,
    redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.func]),
    save: PropTypes.func,
    saving: PropTypes.bool,
    submitOnEnter: PropTypes.bool,
    toolbar: PropTypes.element,
    undoable: PropTypes.bool,
    validate: PropTypes.func,
    version: PropTypes.number,
    sanitizeEmptyValues: PropTypes.bool,
}

const CompactFormView = ({
    children,
    className,
    component: Component,
    handleSubmit,
    handleSubmitWithRedirect,
    invalid,
    margin,
    mutationMode,
    pristine,
    record,
    redirect,
    resource,
    saving,
    submitOnEnter,
    toolbar,
    undoable,
    variant,
    layoutComponents,
    ...rest
}) => {
    const layoutComponentsNamesArr = getComponentsNames(layoutComponents)

    return (
        <form className={classnames('simple-form', className)} {...sanitizeRestProps(rest)}>
            <Component>
                {Children.map(children, (child) =>
                    cloneRecursively(
                        child,
                        (x) => isLayoutComponent(x, layoutComponentsNamesArr),
                        (x) => (
                            <FormInput
                                input={x}
                                record={record}
                                resource={resource}
                                variant={x.props.variant || variant}
                                margin={x.props.margin || margin}
                            />
                        )
                    )
                )}
            </Component>
            {toolbar &&
                cloneElement(toolbar, {
                    handleSubmitWithRedirect,
                    handleSubmit,
                    invalid,
                    mutationMode,
                    pristine,
                    record,
                    redirect,
                    resource,
                    saving,
                    submitOnEnter,
                    undoable,
                })}
        </form>
    )
}

CompactFormView.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    handleSubmit: PropTypes.func, // passed by react-final-form
    handleSubmitWithRedirect: PropTypes.func,
    invalid: PropTypes.bool,
    mutationMode: PropTypes.oneOf(['pessimistic', 'optimistic', 'undoable']),
    pristine: PropTypes.bool,
    record: PropTypes.object,
    resource: PropTypes.string,
    redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.func]),
    save: PropTypes.func, // the handler defined in the parent, which triggers the REST submission
    saving: PropTypes.bool,
    submitOnEnter: PropTypes.bool,
    toolbar: PropTypes.element,
    undoable: PropTypes.bool,
    validate: PropTypes.func,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node]),
    variant: PropTypes.string,
    margin: PropTypes.string,
    layoutComponents: PropTypes.array,
}

CompactFormView.defaultProps = {
    submitOnEnter: true,
    toolbar: <Toolbar />,
    component: CardContentInner,
}

const sanitizeRestProps = ({
    active,
    dirty,
    dirtyFields,
    dirtyFieldsSinceLastSubmit,
    dirtySinceLastSubmit,
    error,
    errors,
    form,
    hasSubmitErrors,
    hasValidationErrors,
    initialValues,
    modified,
    modifiedSinceLastSubmit,
    save,
    submitError,
    submitErrors,
    submitFailed,
    submitSucceeded,
    submitting,
    touched,
    valid,
    validating,
    values,
    visited,
    __versions,
    ...props
}) => props

export default CompactForm

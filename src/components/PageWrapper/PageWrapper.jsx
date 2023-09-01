const PageWrapper = (props) => {
    const { children, lightMode } = props;
    return <main className={lightMode}>{children}</main>;
};

export default PageWrapper;

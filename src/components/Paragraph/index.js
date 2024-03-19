const Paragraph = ({ text, styleBold }) => (
    <>
        {
            text.map((paragraph, idx) => (
                <p
                    key={idx}
                    style={styleBold ? { fontWeight: idx === 4 ? "bold" : "" } : {}}
                >
                    {paragraph}
                </p>
            ))

        }
    </>
)

export default Paragraph;

//{ fontWeight: idx === 4 ? "bold" : "" }
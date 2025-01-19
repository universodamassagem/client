const Paragraph = ({ text, styleBold }) => (
    <>
        {
            text.map((paragraph, idx) => (
                <p
                    key={idx}
                    style={styleBold ? { fontWeight: "bold", fontSize:'1.2em' } : {}}
                >
                    {paragraph}
                </p>
            ))

        }
    </>
)

export default Paragraph;

//{ fontWeight: idx === 4 ? "bold" : "" }
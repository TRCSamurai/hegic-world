
module.exports = {
    purge: {
        content: [
            './public/**/*.html',
            './src/**/*.vue',
        ],
        whitelistPatterns: [
            /-(leave|enter|appear)(|-(to|from|active))$/,
            /^(?!(|.*?:)cursor-move).+-move$/,
            /^router-link(|-exact)-active$/
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#45fff4",
                secondary: "##defefe",
                pink: "#f986bf"
            },
            fontFamily: {
                body: ["Exo 2", "sans-serif"],
                title: ['Jura', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

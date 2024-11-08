using SEQ_BRUKER_a_MP2RAGE_CS_360
using Documenter, Literate

include("generate_lit.jl")

DocMeta.setdocmeta!(SEQ_BRUKER_a_MP2RAGE_CS_360, :DocTestSetup, :(using SEQ_BRUKER_a_MP2RAGE_CS_360); recursive=true)

makedocs(;
    modules=[SEQ_BRUKER_a_MP2RAGE_CS_360],
    authors="aTrotier <a.trotier@gmail.com> and contributors",
    sitename="SEQ_BRUKER_a_MP2RAGE_CS_360.jl",
    format=Documenter.HTML(;
        canonical="https://CRMSB.github.io/SEQ_BRUKER_a_MP2RAGE_CS_360.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
        "Examples" =>["generated/examples/simple_reco.md",
                        "generated/examples/advanced_reco.md"],
    ],
)

deploydocs(;
    repo="github.com/CRMSB/SEQ_BRUKER_a_MP2RAGE_CS_360",
    devbranch="main",
)

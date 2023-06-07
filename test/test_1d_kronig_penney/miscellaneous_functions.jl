function kronig_penney_sturm_liouville(params::Tuple)
    num_ions,a,b,V₀=params;
    ħ=1.0;m=1.0;
    p(x) = 0.5*(ħ*ħ)*(1.0/m);
    q(x) = symetric_kronig_penney(x[1],num_ions,a,b,V₀)
    r(x) = 1.0;
    return p,q,r;
end

function heaviside(x)
    return 0.5*(sign(x)+1)
 end

"""
    sym_rect_pot_barr(x,b,V₀)

    to compute symetrical rectangular potential barrer
"""
function sym_rect_pot_barr(x,b::Real,V₀::Real)
   return V₀*(heaviside(x+0.5*b)-heaviside(x-0.5*b))
end

function kronig_penney_center(x,b::Real,V₀::Real)
    return sym_rect_pot_barr.(x,b,V₀)
end

function kronig_penney_left(x,num_ions::Integer,a::Real,b::Real,V₀::Real)
    result=0.0
    for i in 1:num_ions
        result = result .+ sym_rect_pot_barr.(x.+i*a,b,V₀)
    end
    return result
end

function kronig_penney_right(x,num_ions::Integer,a::Real,b::Real,V₀::Real)
    return kronig_penney_left(-x,num_ions,a,b,V₀)
end

function symetric_kronig_penney(x,num_ions::Integer,a::Real,b::Real,V₀::Real)
    if (mod(num_ions,2) == 0)
        error("num_ions keyword need to be odd")
        stop()
    elseif (num_ions==1)
        kp = kronig_penney_center(x,b,V₀)
    else
        kp = kronig_penney_center(x,b,V₀) .+ kronig_penney_left(x,convert(Int,(num_ions-1)/2),a,b,V₀) .+ kronig_penney_right(x,convert(Int,(num_ions-1)/2),a,b,V₀)
    end
    return kp
end
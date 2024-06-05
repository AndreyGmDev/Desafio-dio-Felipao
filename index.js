let nomeHeroi="João"
let xpHeroi=10001
let nivelHeroi
if(xpHeroi<1001)
{
   nivelHeroi="Ferro"
}
if(xpHeroi>=1001 && xpHeroi<2001)
{
  nivelHeroi="Bronze"
}
if(xpHeroi>=2001 && xpHeroi<5001)
{
  nivelHeroi="Prata"
}
if(xpHeroi>=5001 && xpHeroi<7001)
{
  nivelHeroi="Ouro"
}
if(xpHeroi>=7001 && xpHeroi<8001)
{
  nivelHeroi="Platina"
}
if(xpHeroi>=8001 && xpHeroi<9001)
{
  nivelHeroi="Ascendente"
}
if(xpHeroi>=9001 && xpHeroi<10001)
{
  nivelHeroi="Imortal"
}
if(xpHeroi>=10001)
{
  nivelHeroi="Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
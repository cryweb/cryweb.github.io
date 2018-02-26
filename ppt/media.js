setTimeout(function() {
var html = `
<div style='border:7px dashed lime;width:60%;background-color:yellow;font-weight:bold;margin:20px;padding:20px;'>
<p>This webpage includes code previously used by a crypto miner, meaning that
the owners of this webpage tried to abuse ressources of their visitors for their
financial gain.</p>
<h3>If you're a visitor of this page</h3>
<p>You might want to ask the owners of this webpage why they're abusing
your CPU ressources without your consent.</p>
<h3>If you're the owner of this webpage</h3>
<p>You should remove all references to javascript files at
<b>cryweb.github.io</b>. And you should stop abusing your visitors computers
by including cryptominer code.
</p><img src="https://cw.tlsfun.de/c.png" width="1" height="1" alt="">
</div>
`;
document.body.insertAdjacentHTML('afterbegin', html);
document.body.style.backgroundColor = "#FF33E9";
}, 1000);


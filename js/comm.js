window.onload = function() {
var norms = document.getElementById('norms')
var peps = document.getElementById('peps')
var hts = document.getElementById('hts')
var norms_emojis = document.getElementById('norms-emojis')
var peps_emojis = document.getElementById('peps-emojis')
var hts_emojis = document.getElementById('hts-emojis')
var emoji_panel = document.getElementById('emoji-panel')
var emoji_btn = document.getElementById('emoji-btn')
var comment = document.getElementById('new_comment')
var exitBtn = document.getElementById('exit')
var submitBtn = document.getElementById('submit')
var commentPage = document.querySelector('.comments')
var entered_comment = document.getElementById('entered-comment')

var norm1 = document.getElementById('norm1')
var norm2 = document.getElementById('norm2')
var norm3 = document.getElementById('norm3')
var norm4 = document.getElementById('norm4')
var norm5 = document.getElementById('norm5')
var norm6 = document.getElementById('norm6')
var norm7 = document.getElementById('norm7')
var norm8 = document.getElementById('norm8')
var norm9 = document.getElementById('norm9')

var pep1 = document.getElementById('pep1')
var pep2 = document.getElementById('pep2')
var pep3 = document.getElementById('pep3')
var pep4 = document.getElementById('pep4')
var pep5 = document.getElementById('pep5')
var pep6 = document.getElementById('pep6')
var pep7 = document.getElementById('pep7')
var pep8 = document.getElementById('pep8')
var pep9 = document.getElementById('pep9')

var hts1 = document.getElementById('hts1')
var hts2 = document.getElementById('hts2')
var hts3 = document.getElementById('hts3')
var hts4 = document.getElementById('hts4')
var hts5 = document.getElementById('hts5')
var hts6 = document.getElementById('hts6')
var hts7 = document.getElementById('hts7')
var hts8 = document.getElementById('hts8')
var hts9 = document.getElementById('hts9')

function showEmojis() {
    emoji_panel.style.display = 'block'
    emoji_btn.onclick = function() {exit()}
}

function toNorms() {
    norms.style.border = '1px solid black'
    norms.style.cursor = 'default'

    peps.style.border = 'none'
    peps.style.cursor = 'pointer'

    hts.style.border = 'none'
    hts.style.cursor = 'pointer'

    norms_emojis.style.display = 'block'
    peps_emojis.style.display = 'none'
    hts_emojis.style.display = 'none'
}

function toPeps() {
    norms.style.border = 'none'
    norms.style.cursor = 'pointer'

    peps.style.border = '1px solid black'
    peps.style.cursor = 'default'

    hts.style.border = 'none'
    hts.style.cursor = 'pointer'

    norms_emojis.style.display = 'none'
    peps_emojis.style.display = 'block'
    hts_emojis.style.display = 'none'
}

function toHts() {
    norms.style.border = 'none'
    norms.style.cursor = 'pointer'

    peps.style.border = 'none'
    peps.style.cursor = 'pointer'

    hts.style.border = '1px solid black'
    hts.style.cursor = 'default'

    norms_emojis.style.display = 'none'
    peps_emojis.style.display = 'none'
    hts_emojis.style.display = 'block'
}

norms.onclick = function() {
    toNorms()
}

peps.onclick = function() {
    toPeps()
}

hts.onclick = function() {
    toHts()
}

emoji_btn.onclick = function() {
    showEmojis()
}

function clickableEmojis() {
    norm1.onclick = function() {
        comment.value = comment.value + norm1.innerHTML
    }

    norm2.onclick = function() {
        comment.value = comment.value + norm2.innerHTML
    }

    norm3.onclick = function() {
        comment.value = comment.value + norm3.innerHTML
    }

    norm4.onclick = function() {
        comment.value = comment.value + norm4.innerHTML
    }

    norm5.onclick = function() {
        comment.value = comment.value + norm5.innerHTML
    }

    norm6.onclick = function() {
        comment.value = comment.value + norm6.innerHTML
    }

    norm7.onclick = function() {
        comment.value = comment.value + norm7.innerHTML
    }

    norm8.onclick = function() {
        comment.value = comment.value + norm8.innerHTML
    }

    norm9.onclick = function() {
        comment.value = comment.value + norm9.innerHTML
    }

    pep1.onclick = function() {
        comment.value = comment.value + pep1.innerHTML
    }

    pep2.onclick = function() {
        comment.value = comment.value + pep2.innerHTML
    }

    pep3.onclick = function() {
        comment.value = comment.value + pep3.innerHTML
    }

    pep4.onclick = function() {
        comment.value = comment.value + pep4.innerHTML
    }

    pep5.onclick = function() {
        comment.value = comment.value + pep5.innerHTML
    }

    pep6.onclick = function() {
        comment.value = comment.value + pep6.innerHTML
    }

    pep7.onclick = function() {
        comment.value = comment.value + pep7.innerHTML
    }

    pep8.onclick = function() {
        comment.value = comment.value + pep8.innerHTML
    }

    pep9.onclick = function() {
        comment.value = comment.value + pep9.innerHTML
    }

    hts1.onclick = function() {
        comment.value = comment.value + hts1.innerHTML
    }

    hts2.onclick = function() {
        comment.value = comment.value + hts2.innerHTML
    }

    hts3.onclick = function() {
        comment.value = comment.value + hts3.innerHTML
    }

    hts4.onclick = function() {
        comment.value = comment.value + hts4.innerHTML
    }

    hts5.onclick = function() {
        comment.value = comment.value + hts6.innerHTML
    }

    hts6.onclick = function() {
        comment.value = comment.value + hts6.innerHTML
    }

    hts7.onclick = function() {
        comment.value = comment.value + hts7.innerHTML
    }

    hts8.onclick = function() {
        comment.value = comment.value + hts8.innerHTML
    }

    hts9.onclick = function() {
        comment.value = comment.value + hts9.innerHTML
    }
}

emoji_panel.onmouseover = function() {
    clickableEmojis()
}

function exit() {
    emoji_panel.style.display = 'none'
    emoji_btn.onclick = function() {showEmojis()}
}

function cleanComment() {
    comment.value = ''
}

function postComment() {
    entered_comment.style.display = 'flex'
    setTimeout(function() {
    entered_comment.innerHTML = comment.value
    },1400)
}

exitBtn.onclick = function() {
    exit()
}

comment.onclick = function() {
    exit()
}

submitBtn.onclick = function() {
    exit()
    setTimeout(function() {
    cleanComment()
    },2000)
    setTimeout(function() {
        postComment()
        },500)
}

commentPage.onclick = function() {exit()}

}
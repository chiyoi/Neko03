package app

import (
	"net/http"
	"os"

	"github.com/chiyoi/apricot/neko"
	"github.com/chiyoi/neko03/services/nacho/app/image"
)

const StatusTmpl = `Nyan~
Version: %s`

func Run() {
	srv := &http.Server{
		Addr:    os.Getenv("ADDR"),
		Handler: neko.AllowCrossOrigin(RootHandler()),
	}

	go neko.StartServer(srv, false)
	defer neko.StopServer(srv)

	neko.Block()
}

// RootHandler:
// * /status
// * /image/
func RootHandler() http.Handler {
	mux := http.NewServeMux()
	mux.Handle("/status", neko.StatusHandler())
	mux.Handle(image.PatternHandler("/image/"))
	mux.Handle("/image", neko.RedirectToSlashHandler())
	mux.Handle("/", neko.TeapotHandler(""))
	return mux
}
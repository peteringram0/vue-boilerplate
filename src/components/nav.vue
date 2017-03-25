<template>
<div class="uk-navbar-container uk-navbar-transparent uk-light">
	<div class="uk-container ">
		<nav class="uk-navbar" uk-navbar="{&quot;align&quot;:&quot;left&quot;,&quot;dropbar&quot;:true,&quot;dropbar-anchor&quot;:&quot;!.uk-container&quot;,&quot;dropbar-mode&quot;:&quot;slide&quot;}">
			<div class="uk-navbar-left">
				<a href="#" class="uk-logo uk-navbar-item">
					<!-- <img src="/themes/wordpress/2016/max/wp-content/uploads/logo.svg" alt="Max" class="uk-responsive-height"> -->
				</a>
			</div>
			<div class="uk-navbar-center">
				<ul class="uk-navbar-nav">
					<li class="uk-active  menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-16 current_page_item">
						<a href="#">Page 1</a>
					</li>
					<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">Page 2</a></li>
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children uk-parent"><a href="https://demo.yootheme.com/themes/wordpress/2016/max/?page_id=198">Shop</a>
						<div class="uk-navbar-dropdown">
							<div class="uk-navbar-dropdown-grid uk-child-width-1-1 uk-grid" uk-grid="">
								<div>
									<ul class="uk-nav uk-navbar-dropdown-nav">
										<li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://demo.yootheme.com/themes/wordpress/2016/max/?page_id=199">Cart</a></li>
										<li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://demo.yootheme.com/themes/wordpress/2016/max/?page_id=201">My Account</a></li>
									</ul>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<!-- <div class="uk-navbar-dropbar uk-navbar-dropbar-slide"></div> -->
</div>
</template>

<script>
export default {
	data() {
		return {
			text: 'hi'
		}
	}
}
</script>
